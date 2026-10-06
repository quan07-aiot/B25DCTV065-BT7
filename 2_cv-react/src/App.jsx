import Header from "./components/Header";
import Section from "./components/Section";
import SkillList from "./components/SkillList";
import ProjectList from "./components/ProjectList";
import Footer from "./components/Footer";
import "./App.css";
const skills = ["Lập trình web cơ bản", "C và C embedded", "Python", "Git"];

const projects = [
  {
    id: 1,
    name: "SignBridge - Nhận diện ngôn ngữ kí hiệu",
    description: "Dự án ứng dụng Computer Vision và Deep Learning (mạng LSTM) để phát hiện cử chỉ tay thông qua webcam và dịch trực tiếp sang văn bản tiếng Việt theo thời gian thực",
  },
  {
    id: 3,
    name: "Trang CV cá nhân",
    description: "Trang giới thiệu bản thân bằng HTML và CSS.",
  },
];

function App() {
  return (
    <div className="cv">
      <Header
        name="Hoàng Mạnh Quân "
        title="Sinh viên Công nghệ thông tin - PTIT"
        email="QuanHM.B25TV065@stu.ptit.edu.vn"
      />

      <Section title="Giới thiệu">
        <p>Tôi là 1 sinh viên năm 2 đang học chuyên ngành Trí tuệ nhân tạo vạn vật tại Học Viện Công nghệ Bưu Chính Viễn Thông. Yêu thích lập trình, công nghệ, robot trí tuệ nhân tạo.</p>
      </Section>

      <Section title="Học vấn">
        <p>Học viện Công nghệ Bưu chính Viễn thông (2025 - nay)</p>
      </Section>

      <Section title="Kỹ năng">
        <SkillList skills={skills} />
      </Section>

      <Section title="Dự án">
        <ProjectList projects={projects} />
      </Section>

      <Footer />
    </div>
  );
}

export default App;
