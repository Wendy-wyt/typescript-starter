/**
 * dummy values for a Task object for test purpose
 * @author Yuting Wu
 */
import { Task } from "../../task.model";

export const taskStub = (): Task => {
  return {
    title: 'tasktest',
    status: 'TODO',
    _id: '643559ef9d4986350fa5b687',
    description: 'desc',
    createdAt: new Date('2023-04-12T21:23:47.461Z'),
    updatedAt: new Date('2023-04-12T21:23:47.461Z')
  }
}