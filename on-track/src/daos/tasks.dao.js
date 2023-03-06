import axios from 'axios';
import GoalsDao from './goals.dao';

class TasksDao {
  constructor() {
    this.baseUrl = 'http://localhost:8080/tasks';
    this.userId = this.getProfile().userId;
    this.goalsDao = new GoalsDao();
  }
  //retrieves the userId from browser storage
  getProfile = () => {
    const storedData = localStorage.getItem('profile');
    return storedData ? JSON.parse(storedData) : null;
  }
  
  async getAll() {
    const response = await axios.get(`${this.baseUrl}/tasksbyuser/${this.userId}`);
    return response.data;
  }

  async getAllByGoalId(goalId) {
    const response = await axios.get(`${this.baseUrl}/tasksbygoal/${goalId}`);
    return response.data;
  }

  async getGoalTitle(goalId) {
    return await this.goalsDao.getTitleByGoalId(goalId);
  }

  async addTask(task, goalId, frequency) {
    try {
      const response = await axios.post(`${this.baseUrl}/add`, {
        "userId": this.userId,
        "goalId": goalId,
        "taskName": task,
        "frequency": frequency
    });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
}

export default TasksDao;
