export interface ITask {
    id: number,
    text: string,
    isPerformed: boolean
}
export interface IState {
    tasks: ITask[],
    inputValue: string
}