import React, { useState } from "react";
import RegSelector from "../Components/RegSelector";
import StudentList from "../Components/StudentList";


export default function StudentsContent(){
  let [selectedStudent, setSelectedStudent] = useState();
  let [selectedBtn, setSelectedBtn] = useState(1);
  console.log(selectedBtn);
  if (selectedStudent){
    return(
      <RegSelector setSelected={setSelectedBtn} selected={selectedBtn}/>
    )
  }
  else{
  return(
    <StudentList setSelectedBtn={setSelectedBtn} setSelectedStudent={setSelectedStudent} />
  )}
}
