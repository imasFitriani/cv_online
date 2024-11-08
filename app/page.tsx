import PersonalInfo from "./components/personalinfo"; // Capitalize 'PersonalInfo' to match common convention
import RiwayatPendidikan from "./components/RiwayatPendidikan"; // Capitalize 'PersonalInfo' to match common convention
import RiwayatPekerjaan from "./components/RiwayatPekerjaan"; // Capitalize 'PersonalInfo' to match common convention
import Skills from "./components/skills"; // Capitalize 'PersonalInfo' to match common convention

export default function CVOnline() {
  return (
    <section>
      <PersonalInfo />
      <RiwayatPendidikan />
      <RiwayatPekerjaan />
      <Skills />
    </section>
  );
}



// fotoku{
//   border-radius: 50%;
//   width: 200px;
//   height: 200px;
//   object-fit: cover;
//   margin: 15px auto;
//   display: block;
//   border: solid 5px white;
//   box-shadow: 0px 0px 10px yellow;
//   cursor: pointer;
//   transition: .2s;
  
//   }
  
//   fotoku:hover{
//   border: solid 5px yellow;
//   box-shadow: 0px 0px 10px yellow;
//   transform: scale(1.1);
  
//   }
