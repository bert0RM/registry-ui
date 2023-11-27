import './App.css';

import * as Collapsible from '@radix-ui/react-collapsible';

import { Checkbox, Flex, Table } from '@radix-ui/themes';
import { DotsHorizontalIcon, MinusIcon, PlusIcon } from '@radix-ui/react-icons';

import GarbageCollectionCard from './components/GarbageCollectionCard/garbageCollectionCard';
import Header from './components/Header/header';
import React from 'react';
import StorageCard from './components/StorageCard/storageCard';

function Images() {
const [open, setOpen] = React.useState(false);
  return (
    <div className="App">
        <Header/>
        <Flex gap={"4"}>
            <StorageCard/>
            <GarbageCollectionCard/>
        </Flex>
        <div>
            <Collapsible.Root className="bg-zinc-900 rounded h64 mx-[10px]" open={open} onOpenChange={setOpen}>
                <div className="rounded my-[10px] p-[10px] shadow-[0_2px_10px] shadow-blackA4">
                    <Flex>
                        <Collapsible.Trigger asChild>
                            <button className="rounded h-[25px] w-[25px] inline-flex items-center justify-center text-violet11 shadow-[0_2px_10px] shadow-blackA4 outline-none data-[state=closed]:bg-white data-[state=open]:bg-violet3 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black">
                                {open ? <MinusIcon /> : <PlusIcon />}
                            </button>
                        </Collapsible.Trigger>
                        <span className="text-[15px] leading-[25px] ml-[8px]">@radix-ui/primitives</span>
                    </Flex>
                </div>

                <Collapsible.Content className='p-[10px]'>
                    <Table.Root variant="surface">
                        <Table.Header>
                            <Table.Row>
                                <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
                                <Table.ColumnHeaderCell>Digest</Table.ColumnHeaderCell>
                                <Table.ColumnHeaderCell>Tags</Table.ColumnHeaderCell>
                                <Table.ColumnHeaderCell>Size</Table.ColumnHeaderCell>
                                <Table.ColumnHeaderCell>Last Pushed</Table.ColumnHeaderCell>
                                <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.RowHeaderCell><Checkbox/></Table.RowHeaderCell>
                                <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
                                <Table.Cell>danilo@example.com</Table.Cell>
                                <Table.Cell>Developer</Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell><DotsHorizontalIcon/></Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.RowHeaderCell><Checkbox/></Table.RowHeaderCell>
                                <Table.RowHeaderCell>Zahra Ambessa</Table.RowHeaderCell>
                                <Table.Cell>zahra@example.com</Table.Cell>
                                <Table.Cell>Admin</Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell><DotsHorizontalIcon/></Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.RowHeaderCell><Checkbox/></Table.RowHeaderCell>
                                <Table.RowHeaderCell>Jasper Eriksson</Table.RowHeaderCell>
                                <Table.Cell>jasper@example.com</Table.Cell>
                                <Table.Cell>Developer</Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell><DotsHorizontalIcon/></Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table.Root>
                </Collapsible.Content>
            </Collapsible.Root>
        </div>
    </div>
  );
}

export default Images;
