import React from "react";
import { createMemoryHistory } from "history";
import ReactDOM from "react-dom";
import App from "./App";

const mount = (
    element: any,
    { updateContainerBrowserHistory, defaultHistory }: any
) => {
    const history = defaultHistory || createMemoryHistory();

    if (updateContainerBrowserHistory)
        history.listen(updateContainerBrowserHistory);
    ReactDOM.render(<App history={history} />, element);

    return {
        updateRemoteMemoryHistory(containerHistoryState: any) {
            const remoteHistory = history.location;
            if (remoteHistory.pathname !== containerHistoryState.pathname)
                history.push(containerHistoryState.pathname);
        },
    };
};

export { mount };
