import { Card, Skeleton } from "@mui/material";

function SkeletonCardProduct() {
  return (
    <Card className='cardProduct'>
      <Skeleton animation="wave" variant="rectangular" width={250} height={40} style={{alignSelf:'center', borderRadius:'5px'}} />
      <Skeleton animation="wave" variant="rectangular" width={280} height={80} style={{alignSelf:'center', borderRadius:'5px'}} />
      <Skeleton animation="wave" variant="rectangular" width={80} height={35} style={{alignSelf:'center', borderRadius:'5px'}}  />
    </Card>
  );
}

export default SkeletonCardProduct;