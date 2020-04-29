export interface ITask {
    id: number
    text: string
    isPerformed: boolean
    isTagged: boolean
    date: string
}
export interface IState {
    tasks: ITask[]
}