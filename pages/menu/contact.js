import Layout from "../../components/Layout";
import GlobalStyle from "../../styles/GlobalStyle";
import ReturnButton from "../../components/Buttons/ReturnButton";
import Header from "../../components/Header";
import styled from "styled-components";

export default function Contact() {
  return (
    <>
      <title>Contact</title>
      <Header>Contact</Header>

      <StyledSection>
        <section className="description">
          <p>
            Any constructive feedback, reports, or requests to improve the app are welcome. Please feel free to reach out at <a href="mailto:queer4queer@proton.me">queer4queer@proton.me</a>
          </p>
        </section>
      </StyledSection>
    </>
  );
}

const StyledSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 40px;
  background-color: #1c1c1c; /* Base color */
  color: #d3d3d3; /* Labels color */
  text-align: center;

  .description {
    max-width: 800px;
    background: rgba(255, 255, 255, 0.05); /* Light background with opacity */
    padding: 30px;
    border-radius: 12px; /* Rounded corners */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* Subtle shadow */
  }

  p {
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    line-height: 1.8;
    color: #ffffff; /* Text color */
  }

  a {
    color: #91c8f6; /* Link color */
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #f5a9b8; /* Hover color */
    }
  }
`;