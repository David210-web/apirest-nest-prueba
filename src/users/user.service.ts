// src/users/user.service.ts

import { Injectable } from "@nestjs/common";

export interface User {
    id: number;
    name: string;
    email: string;
  }
  
  @Injectable()
  export class UserService {
    private users: User[] = []; // Arreglo que simula la base de datos
  
    create(name: string, email: string): User {
      const user = { id: this.users.length + 1, name, email };
      this.users.push(user);
      return user;
    }
  
    findAll(): User[] {
      return this.users;
    }
  
    findOne(id: number): User {
      return this.users.find((user) => user.id === id);
    }
  
    update(id: number, name: string, email: string): User {
      const userIndex = this.users.findIndex((user) => user.id === id);
      if (userIndex !== -1) {
        this.users[userIndex] = { id, name, email };
        return this.users[userIndex];
      }
      return null;
    }
  
    remove(id: number): boolean {
      const userIndex = this.users.findIndex((user) => user.id === id);
      if (userIndex !== -1) {
        this.users.splice(userIndex, 1);
        return true;
      }
      return false;
    }
  }
  