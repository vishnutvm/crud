const { Input, Button } = require('@mantine/core');
const { useState } = require('react');
import styles from '@/styles/Home.module.css';

const TaskInput = ({
  setInput,
  handleCreateNew,
  input,

  isEdit,
  handleEditing,
}) => {
  //  handling input change

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className={styles.crud_input_wrapper}>
      <Input
        onChange={handleInputChange}
        placeholder="Input your task"
        className={styles.taskAdd_btn}
        value={input}
        styles={(theme) => ({
          input: {
            '&:focus-within': {
              borderColor: theme.colors.orange[7],
            },
          },
        })}
      />

      {isEdit ? (
        <Button onClick={handleEditing}>Update</Button>
      ) : (
        <Button onClick={handleCreateNew}>Add</Button>
      )}
    </div>
  );
};

export default TaskInput;
