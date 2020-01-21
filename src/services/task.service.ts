import { Request, Response } from "express";

import { Task } from "../models/task.model";
import { MongooseDocument } from "mongoose";
import mongoose from 'mongoose';

export class TaskService {

  public welcomeMessage(req: Request, res: Response) {
    return res.status(200).send("Welcome to pokeAPI REST by Nya ^^");
  }

  public async getTasks(req: Request, res: Response) {
    Task.find({},(error: Error, task: MongooseDocument) => {
      if (error){
        console.log(error)
        return res.json(error);
      }else{
        res.json(task);
      }
    })
  }

  public addNewTask(req: Request, res: Response) {
    const newTask = new Task(req.body);
    newTask.save((error: Error, task: MongooseDocument) => {
      if (error)
        res.send(error);
      const message = 'Added new task'  
      res.json(message);
    })
  }

  public async deleteTaskById(req: Request, res: Response) {
    const _id = req.params.id;

    Task.findByIdAndDelete(_id, (error: Error) => {
      if (error)
        return res.send(error)

      const message = 'Deleted succesfully'

      res.send(message);
    })
  }

  public updateTask(req: Request, res: Response) {
    const taskId = req.params.id;
    const taskToUpdate = req.body;
    Task.findByIdAndUpdate(taskId, taskToUpdate, (error: Error, task: any) => {
      if (error)
        res.send(error);
      const message = task ? 'Updated successfully' : 'Task not found :(';
      res.send(message);
    })
  }
}