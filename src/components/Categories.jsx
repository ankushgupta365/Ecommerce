import styled from 'styled-components'
import { categories } from '../data'
import Category from './Category'

const Container = styled.div`
display: flex;
justify-content: space-between;
padding: 20px;
`

const Categories = () => {
  return (
   <Container>
    {categories.map((item)=>(
        <Category item={item}/>
    ))}
   </Container>
  )
}

export default Categories