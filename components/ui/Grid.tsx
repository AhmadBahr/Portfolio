import React from 'react'
import { BentoGrid, BentoGridItem } from './BentoGrid'

const Grid = () => {
    return (
        <section id="about">
            <BentoGrid>
                {[{
                    title: 'About',
                    description: 'Description',
                    id: 1
                }].map((item) => (
                    <BentoGridItem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </BentoGrid>
        </section>
    )
}

export default Grid