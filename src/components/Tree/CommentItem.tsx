
function CommentItem(props: any) {
    const nestedComments = (props.item.replies || [])
        .map((item: any, index: number) => {
            return (
                <CommentItem
                    item={item}
                    key={index}
                />
            );
        });
    return (
        <div>
            <div>{props.item.username}</div>
            <div>{props.item.date} at {props.item.time}</div>
            <div style={{ paddingLeft: '40px' }}>{nestedComments}</div>
        </div>
    )
}

export default CommentItem
