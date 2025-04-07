import styled from 'styled-components'

export const Container = styled.section`
    /* position: absolute;
    top: 0; */

    width: 800px;
    padding-top: 10rem;


    div {
   
            display: flex;
            justify-content: space-between;

            h1 {
                font-size: 5rem;
                color: white;
            }

            img {
                width: 50px;
                height: 50px;
            
            }
        
        > input {
            font-family: 'Josefin sans';

            padding: 2rem 2rem;
            width: 100%;

            border-radius: 0.4rem;
            outline: none;
            border: none;

            margin-bottom: 1rem;
        }
    
        button {
            font-family: 'Josefin sans';
        }

        ul {
            width: 100%;

            li {
                background-color: white;
                padding: 2rem 2rem;
                border-radius: 0.4rem;

                label {
                    display: flex;
                    align-items: center;

                    button {
                        align-self: flex-end;
                        left: 0;
                    }
                
                }
            }
        }
    }
`