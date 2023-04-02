import { Text, Image, MediaQuery } from '@mantine/core';
import { useStyles } from './StarshipDetails.styles';
import timeAgo from 'utils/timeAgo';
import getIDFromURL from 'utils/getIDFromURL';
import { STARSHIPS } from 'utils/starships';
import getFileName from 'utils/getFileName';
import { StarshipData } from 'types/StarshipData';
import getSpacedWord from 'utils/getSpacedWord';

export function StarshipDetails({
  starship,
  shipImgSrc,
}: {
  starship: StarshipData;
  shipImgSrc: string;
}) {
  const { classes } = useStyles();
  const shipDetailsKeys = Object.keys(starship);
  shipDetailsKeys.pop();
  shipDetailsKeys.pop();
  shipDetailsKeys.pop();
  return (
    <div className={classes.container}>
      <div className={classes.dummyContainer}></div>
      <div className={classes.detailsContainer}>
        <Text className={classes.titleText}>{starship.name}</Text>
        <MediaQuery smallerThan={'md'} styles={{ display: 'none' }}>
          <Image src={shipImgSrc} height="400px" radius={'xl'} />
        </MediaQuery>
        <MediaQuery largerThan={'md'} styles={{ display: 'none' }}>
          <Image src={shipImgSrc} height="200px" radius={'xl'} />
        </MediaQuery>
        <div className={classes.shipSubDetailsContainer}>
          <Text className={classes.detailsText}>Produced By {starship.manufacturer}</Text>
          <Text className={classes.detailsText}>Released {timeAgo(starship.created)}</Text>
        </div>
        <Text className={classes.starshipText}>Starship Specs</Text>
        <div className={classes.specsContainer}>
          {shipDetailsKeys.map((shipDetailKey) => {
            const shipDetail = starship[shipDetailKey as keyof StarshipData];
            if (typeof shipDetail === 'object') {
              return <></>;
            }
            return (
              <div className={classes.singleSpecContainer} key={shipDetailKey}>
                <Text className={classes.specLabelText}>{getSpacedWord(shipDetailKey)}</Text>
                <Text className={classes.specText}>
                  {Array.isArray(shipDetail) ? shipDetail.length : shipDetail}
                </Text>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
