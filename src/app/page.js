import { Footer } from "@../../component/Footer";
import { Header } from "@../../component/Header";
import { Task } from "@../../component/Task";
import { TaskInput } from "@../../component/TaskInput";

export default function Home() {
  return (
    // Main container
    <div className="container mx-auto">
      {/* header section */}
      <Header></Header>

      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* task input */}
        <TaskInput></TaskInput>
        {/* task */}
        <Task title="Read a book"></Task>
        {/* task */}
        <Task title="Take a shower"></Task>
        {/* task */}
        <Task title="Sleep"></Task>
      </div>

      {/* //footer section */}
      <Footer
        year="2023"
        fullName="Ratchapo Prangthong"
        studentId="650610802"
      ></Footer>
    </div>
  );
}
