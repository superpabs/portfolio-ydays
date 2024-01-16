import { useRef } from "react";
import "./about.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const About = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="about"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Student in Computer Science and Information Systems
          <br /> and intern at Cocktail d'Impressions.
        </p>

        <hr />
      </motion.div>

      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>Precious Soriano</motion.b>
          </h1>
        </div>

        <div className="title">
          <h2>
            Webmaster & Graphic Designer
          </h2>

          <p>Dedicated to excelling in the dynamic field of computer science, showcasing a portfolio that highlights my achievements and the fusion of design and technology.</p>
        </div>
      </motion.div>

      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "gray", color: "black" }}
        >
            <h2>Webmaster</h2>

            <div className="list">
                <ul>
                    <li>
                        <img src="/check.png" alt="" />

                        <div className="experience">
                            <h3>WordPress</h3>
                            <p>Experienced</p>
                        </div>

                    </li>

                    <li>
                        <img src="/check.png" alt="" />

                        <div className="experience">
                            <h3>Web Development</h3>
                            <p>Experienced</p>
                        </div>
                    </li>

                    <li>
                        <img src="/check.png" alt="" />

                        <div className="experience">
                            <h3>HTML/CSS</h3>
                            <p>Experienced</p>
                        </div>
                    </li>

                    <li>
                        <img src="/check.png" alt="" />

                        <div className="experience">
                            <h3>SEO</h3>
                            <p>Intermediate</p>
                        </div>
                    </li>
                </ul>
            </div>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "gray", color: "black" }}
        >
            <h2>Graphic Designer</h2>

            <div className="list">
                <ul>
                    <li>
                        <img src="/check.png" alt="" />

                        <div className="experience">
                            <h3>Canva</h3>
                            <p>Experienced</p>
                        </div>

                    </li>

                    <li>
                        <img src="/check.png" alt="" />

                        <div className="experience">
                            <h3>Adobe InDesign</h3>
                            <p>Intermediate</p>
                        </div>

                    </li>

                    <li>
                        <img src="/check.png" alt="" />

                        <div className="experience">
                            <h3>Adobe Illustrator</h3>
                            <p>Intermediate</p>
                        </div>

                    </li>

                    <li>
                        <img src="/check.png" alt="" />

                        <div className="experience">
                            <h3>Adobe Photoshop</h3>
                            <p>Beginner</p>
                        </div>

                    </li>
                </ul>
            </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;