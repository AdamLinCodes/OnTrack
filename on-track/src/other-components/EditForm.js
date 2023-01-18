import '../styles/edit.css';
import GoalInput from './GoalInput';
import TaskInput from './TaskInput';
import EditTasksList from './EditTasksList';

function EditForm() {
  return (
    <div>
      <GoalInput/>
      <TaskInput/>
      <EditTasksList/>
    </div>
  );
}

export default EditForm;
