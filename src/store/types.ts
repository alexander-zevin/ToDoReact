export interface ITask {
    id: number
    text: string
    isPerformed: boolean
    isTagged: boolean
}
export interface IState {
    tasks: ITask[]
}