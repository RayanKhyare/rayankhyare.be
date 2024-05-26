import Image from "next/image";



export default function Home() {
  return (
    <>
      <Image
        src="/assets/me.png" // Notice the path starts from the public directory
        alt="Picture of me"
        width={125} // these are values for example
        height={125}
      />
      
      <h1>Rayan Khyare</h1>

      <p className="introduction" style={{ width:"80%"}}>Hi there! I’m a passionate web developer specializing in creating stunning and user-friendly websites. At 21 years old, I'm in my first year of professional experience, and I thrive on the thrill of learning new technologies and techniques. I'm always eager for opportunities to expand my skills and deliver exceptional digital experiences.</p>

      <h2>Selected projects</h2>
    </>
  );
}
