import { Card, Flex } from '@radix-ui/themes';

function garbageCollectionCard() {
  return (
    <Card style={{ maxWidth: 240 }}>
        <Flex gap="2" direction='column'>
            <p className='font-semibold'>
                GARBAGE COLLECTION
            </p>
            <p className='font-black'>
                0 Bytes
            </p>
            <p>
                Unused registry data
            </p>
            <p  className='text-xs font-light'>
                😎 Storage space is optimized.
            </p>
        </Flex>
    </Card>
  );
}

export default garbageCollectionCard;
