import React from 'react'
import {styled} from '@mui/system'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from '@mui/material';

export default function SocialMediaRow() {
  return (
    <Wrapper>
        <Redirect target='_blank' href='https://linkedin.com/in/gabriel-rissi'>
            <CustomIconButton>
                <LinkedInIcon sx={{fontSize: '1.5rem', display: 'block'}}/>
            </CustomIconButton>
        </Redirect>
        <Redirect target='_blank' href='https://github.com/gbrissi'>
            <CustomIconButton>
                <GitHubIcon sx={{fontSize: '1.5rem', display: 'block'}}/>
            </CustomIconButton>
        </Redirect>
        <Redirect href="mailto:gabrielrissisc@gmail.com">
            <CustomIconButton>
                <EmailIcon sx={{fontSize: '1.5rem', display: 'block'}}/>
            </CustomIconButton>
        </Redirect>
    </Wrapper>
  )
}

const Wrapper = styled('div')`
    display: flex;
    align-items: center;
    width: 100%;
`

const CustomIconButton = styled(IconButton)`
    position: relative; 
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    padding: 15px;
    :hover {
        animation: zoom-in-zoom-out 2s ease infinite;
        @keyframes zoom-in-zoom-out {
            0% {
                transform: scale(1, 1);
            }
            50% {
                transform: scale(1.2, 1.2);
            }
            100% {
                transform: scale(1, 1);
            }
        }
    }
`

const Redirect = styled('a')`
    all: unset;
    display: block;
`