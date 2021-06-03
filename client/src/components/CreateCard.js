import styled from 'styled-components/macro'

export default function CreateCard() {
  return (
    <Wrapper>
      <button>&lt; back</button>
      <form>
        <label>
          Text:
          <textarea rows="3" cols="33" />
        </label>

        <label>
          Author:
          <input type="textarea" />
        </label>

        <button>Create Card</button>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 20px;
`
