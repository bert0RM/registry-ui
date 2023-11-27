import { Box, Flex } from '@radix-ui/themes';

import { ContainerIcon } from '@primer/octicons-react';
import React from 'react';

function Header() {
  return (
    <div>
        <Flex width={"100%"} justify='between' align='stretch'>
            <Box height="9" grow={"0"} style={{ background: 'var(--gray-a2)', borderRadius: 'var(--radius-3)' }}>
                <Flex className='p10'>
                    <ContainerIcon size='medium'/>
                    <p>Docker</p>
                </Flex>
            </Box>
            <Box width='9' height='9' style={{ background: 'var(--gray-a2)', borderRadius: 'var(--radius-3)' }}>
                Test
            </Box>
        </Flex>
    </div>
  );
}

export default Header;
