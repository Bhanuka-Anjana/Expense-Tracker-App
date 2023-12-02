import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import ExpenseForm from "./ExpenseForm";

const ListRow = ({ expense }) => {
  const [isEditing, setIsEditing] = useState(false);
  return isEditing ? (
    <ExpenseForm expense={expense} setIsEditing={setIsEditing} />
  ) : (
    <div>
      <Row>
        <Col>{expense.description}</Col>
        <Col>${expense.amount}</Col>
        <Button variant="warning" onClick={() => setIsEditing(!isEditing)}>
          Edit
        </Button>
      </Row>
    </div>
  );
};
export default ListRow;
