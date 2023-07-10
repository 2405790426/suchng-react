import Son from "./Son"

export default function index() {
    return (
        <div>
            <Son render={(data: any) => (<div>hello,{data}</div>)} />
        </div>
    )
}
