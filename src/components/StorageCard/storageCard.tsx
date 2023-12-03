import * as Progress from '@radix-ui/react-progress';

import { Card, Flex } from '@radix-ui/themes';

import React from 'react';

function StorageCard() {
    const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 300);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <Card style={{ maxWidth: 240 }}>
        <Flex gap="2" direction='column'>
            <p className='font-semibold'>
                STORAGE USAGE
            </p>
            <p className='font-black'>
                {progress}%
            </p>
            <Progress.Root
                className="relative overflow-hidden bg-blackA6 rounded-full w-[200px] h-[8px]"
                style={{
                    // Fix overflow clipping in Safari
                    // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
                    transform: 'translateZ(0)',
                }}
                value={progress}
                >
                <Progress.Indicator
                    className="bg-white w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
                    style={{ transform: `translateX(-${100 - progress}%)` }}
                />
            </Progress.Root>
            <p className='text-xs font-light'>
                50.01 MB / 500 MB
            </p>
        </Flex>
    </Card>
  );
}

export default StorageCard;
