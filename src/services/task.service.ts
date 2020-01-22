import { Request, Response } from "express";

import { Task } from "../models/task.model";
import { MongooseDocument } from "mongoose";
import mongoose from 'mongoose';

export class TaskService {

  private static LIMIT_DOCS: number = 100;

  public welcomeMessage(req: Request, res: Response) {
    return res.status(200).send("Api rest to ToDo App");
  }

  public async getTasks(req: Request, res: Response) {
    let message;
    Task.find({}, (error: Error, task: MongooseDocument) => {
      if (error) {
        message = 'Error on server';
        return res.json(error);
      }
      return res.json(task);
    })
  }

  public addNewTask(req: Request, res: Response) {
    let message = '';
    const newTask = new Task(req.body);
    newTask.save((error: Error, task: MongooseDocument) => {
      if (error) {
        message = 'Error while trying to save';
        return res.send({message});
      }
      message = 'Added new task';
      return res.send({message});
    })
  }

  public async deleteTaskById(req: Request, res: Response) {
    const _id = req.params.id;
    let message = '';
    Task.findByIdAndDelete(_id, (error: Error, taskDeleted: any) => {
      if (error) {
        message = 'Error while trying to delete';
        return res.send({message});
      }

      message = 'Deleted succesfully'
      res.send({message, taskDeleted});
    })
  }

  public updateTask(req: Request, res: Response) {
    const taskId = req.params.id;
    const taskToUpdate = req.body;
    let message;
    Task.findByIdAndUpdate(taskId, taskToUpdate, (error: Error, task: any) => {
      if (error) {
        message = 'Error while trying to update';
        return res.send({message});
      }
      message = task ? 'Updated successfully' : 'Task not found';
      res.send({message});
    })
  }
}