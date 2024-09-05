import {
  Button,
  CardActionArea,
  CardActions,
  CardContent,
  Icon,
  Typography,
  CardHeader,
} from '@mui/material';
import React from 'react';
import SplitButtonHref from '../buttons/SplitButtonHref.js';
import ProyectCardStyled from '../StyledComponents/proyects/ProyectCardStyled.js';
import ProyectImageCard from './ProyectImageCard.js';
import { Job } from '../../features/data/jobsData.js';

interface MyProps {
  data: Job;
}

export default function JobCard({ data }: MyProps): JSX.Element {
  const {
    picture,
    description,
    urls,
    company,
    fromDate,
    position,
    toDate,
  }: Job = data;

  const [showMoreInfo, setShowMoreInfo]: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
  ] = React.useState<boolean>(false);
  const toggleMoreInfo: VoidFunction = (): void =>
    setShowMoreInfo((v: boolean): boolean => !v);

  return (
    <ProyectCardStyled raised>
      <CardHeader title={company.split('-').join(' ')} />
      <CardActionArea
        onClick={toggleMoreInfo}
        className={showMoreInfo ? 'rotate' : ''}>
        {showMoreInfo ? (
          <CardContent>
            <Typography>Position: {position}</Typography>
            <Typography>
              From: {fromDate.toDateString()}
              {toDate && ' To: ' + toDate.toDateString()}
            </Typography>
            {Array.isArray(description) ? (
              description.map(
                (t: string, i: number): JSX.Element => (
                  <Typography key={i}>{t}</Typography>
                )
              )
            ) : (
              <Typography>{description}</Typography>
            )}
          </CardContent>
        ) : (
          <ProyectImageCard image={picture} title={company} />
        )}
      </CardActionArea>
      <CardActions disableSpacing>
        <Button
          color='info'
          variant='contained'
          size='small'
          onClick={toggleMoreInfo}
          sx={{
            color: '#fff',
            textTransform: 'none',
          }}
          endIcon={
            <Icon>
              {showMoreInfo ? 'arrow_drop_up_icon' : 'arrow_drop_down_icon'}
            </Icon>
          }>
          <Typography>Info</Typography>
        </Button>
        {urls ? (
          <SplitButtonHref options={urls}>
            <Typography>Sites</Typography>
          </SplitButtonHref>
        ) : null}
      </CardActions>
    </ProyectCardStyled>
  );
}
