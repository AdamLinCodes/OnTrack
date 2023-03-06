import axios from 'axios';

class GoalsDao {
  constructor() {
    this.baseUrl = 'http://localhost:8080/goals';
    this.userId = this.getProfile().userId;
  }
  //retrieves the userId from browser storage
  getProfile = () => {
    const storedData = localStorage.getItem('profile');
    return storedData ? JSON.parse(storedData) : null;
  };

  async getAll() {
    const response = await axios.get(`${this.baseUrl}/goalsbyuser/${this.userId}`);
    return response.data;
  }

  async getTitleByGoalId(goalId) {
    const goals = await this.getAll();
    for (let goal of goals) {
      if (goal._id == goalId) {
        return goal.title
      }
    }
  }
}

export default GoalsDao;
