import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as Components from './Components'

import store from "./Store"
import {DispatchActions} from "./Dispatcher"
import {Provider, connect} from "react-redux"
import {Dispatch} from "redux"

// export class App extends React.Component<{}, {}> {
//     render() {
//         return (
//             <div>
//                 Hello React!!!
//             </div>
//         )
//     }
// }

const TodoAppComponent = connect(
    (store: any) => {
        return {
            state: store.todo
        }
    },
    (dispatch: Dispatch<any>) => {
        return {
            actions: new DispatchActions(dispatch)
        }
    }
)(Components.TodoApp)

// ReactDOM.render(
//     <Components.TodoApp />,
//     document.getElementById('app')
// )

ReactDOM.render(
    <Provider store={store}>
        <TodoAppComponent />
    </Provider>,
    document.getElementById('app')
)