import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic("f7d28841-00da-4866-94bd-b11b0ca7908c", props.user.username, props.user.secret);

    return (
    <div style={{height: '100vh'}}>
     <MultiChatSocket {...chatProps} />
     <MultiChatWindow {...chatProps}/>
    </div>)
}

export default ChatsPage;