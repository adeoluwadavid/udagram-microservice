
export const config = {
  'username': 'adewolek9',//process.env.POSTGRES_USERNAME,
  'password': 'adewolek9', //process.env.POSTGRES_PASSWORD,
  'database': 'postgres', // process.env.POSTGRES_DB,
  'host':   'adewolek9.cgbusbczudwb.us-east-1.rds.amazonaws.com' , //process.env.POSTGRES_HOST,
  'dialect': 'postgres',
  'aws_region': 'us-east-1',//process.env.AWS_REGION,
  'aws_profile': 'default', //process.env.AWS_PROFILE,
  'aws_media_bucket': 'adewolek9bucket',// process.env.AWS_BUCKET,
  'url': '',//process.env.URL,
  'jwt': {
    'secret':'adewole123456' // process.env.JWT_SECRET,
  },
};
// export const config = {
//   'username': process.env.POSTGRES_USERNAME,
//   'password': process.env.POSTGRES_PASSWORD,
//   'database': process.env.POSTGRES_DB,
//   'host':   process.env.POSTGRES_HOST,
//   'dialect': 'postgres',
//   'aws_region': process.env.AWS_REGION,
//   'aws_profile': process.env.AWS_PROFILE,
//   'aws_media_bucket': process.env.AWS_BUCKET,
//   'url': process.env.URL,
//   'jwt': {
//     'secret':process.env.JWT_SECRET,
//   },
// };