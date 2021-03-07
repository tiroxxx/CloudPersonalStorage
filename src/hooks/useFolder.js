import { useEffect, useReducer } from "react";

const ACTIONS = {
    SELECT_FOLDER: "select-folder"
}

function reducer(state, { type, payload }) {
    
}

export function useFolder(folderId = null, folder = null) {
    const [state, dispatch] = useReducer(reducer, {
        folderId,
        folder,
        childFolders: [],
        childFiles: []
    })

    useEffect(() => {
        dispatch({ type: ACTIONS.SELECT_FOLDER, payload: { folderId, folder } })
    }, [folderId, folder])
}