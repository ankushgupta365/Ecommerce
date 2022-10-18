import styled from "styled-components"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
   width: 25%;
    background-color: white;
    padding: 20px;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    padding: 10px;
    margin: 10px 0;
`
const Button = styled.button`
    width: 40%;
    border: none;
    background-color: teal;
    color: white;
    cursor: pointer;
    padding: 15px 20px;
    margin-bottom: 10px;
`
const Link = styled.a`
   font-size: 12px;
   text-decoration: underline;
   cursor: pointer;
   margin: 5px 0; 
`
const Login = () => {
  return (
    <Container>
        <Wrapper>
                <Title>LOGIN</Title>
                <Form>
                    <Input placeholder="username" />
                    <Input placeholder="password" />
                    <Button>CREATE</Button>
                    <Link>Forgot your password?</Link>
                    <Link>Create an Account</Link>
                </Form>
            </Wrapper>
    </Container>
  )
}

export default Login