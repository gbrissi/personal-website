import React from 'react'
import {styled} from '@mui/system'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from '@mui/material';

export default function SocialMediaRow() {
  return (
    <Wrapper>
        <CustomIconButton>
            <Redirect target='_blank' href='https://linkedin.com/in/gabriel-rissi'>
                <LinkedInIcon sx={{fontSize: '1.5rem', display: 'block'}}/>
            </Redirect>
        </CustomIconButton>
        <CustomIconButton>
            <Redirect target='_blank' href='https://github.com/gbrissi'>
                <GitHubIcon sx={{fontSize: '1.5rem', display: 'block'}}/>
            </Redirect>
        </CustomIconButton>
        <CustomIconButton>
            <Redirect href="mailto:gabrielrissisc@gmail.com">
                <EmailIcon sx={{fontSize: '1.5rem', display: 'block'}}/>
            </Redirect>
        </CustomIconButton>
    </Wrapper>
  )
}

const Wrapper = styled('div')`
    display: flex;
    align-items: center;
    width: 100%;
`

const CustomIconButton = styled(IconButton)`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    padding: 15px;
    :hover {
        position: relative;
        top: -3px;
    }
`

const Redirect = styled('a')`
    all: unset;
    display: block;
`