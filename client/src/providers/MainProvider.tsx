import React, { createContext, useReducer, useState } from 'react';

interface MainInputProps {}

const workspaces: any = {
  me: null,
  workspaces: [],
  channels: [],
  currentWorkspace: null,
  currentChannel: null,
};

function mainReducer(state: any, action: any) {
  switch (action.type) {
    case 'UPDATE_ME':
      return { ...workspaces, me: state.payload };
    case 'SWITCH_WORK_SPACE':
      return { ...workspaces, currentWorkspace: state.payload };
    default:
      throw new Error();
  }
}

const MainContext = createContext(workspaces);

const MainProvider: React.FC<MainInputProps> = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, workspaces);

  const updateMe = (payload: any) => {
    dispatch({ type: 'UPDATE_ME', payload });
  };

  return (
    <MainContext.Provider value={{ state, updateMe }}>
      {children}
    </MainContext.Provider>
  );
};

export default MainProvider;
