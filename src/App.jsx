import React, { useEffect, useState } from 'react';
import { Graph } from 'react-d3-graph';
import Grafo from './Grafo';

const App = () => {
    const [data, setData] = useState({ nodes: [], links: [] });

    useEffect(() => {
        const grafo = new Grafo();

        grafo.addNode({ id: 'c1', label: 'Cali', type: 'city' });
        grafo.addNode({ id: 'c2', label: 'Soledad', type: 'city' });
        grafo.addNode({ id: 'c3', label: 'Dallas', type: 'city' });
        grafo.addNode({ id: 'c4', label: 'Jalisco', type: 'city' });
        grafo.addNode({ id: 'c5', label: 'Culiacan', type: 'city' });
        grafo.addNode({ id: 'c6', label: 'Valledupar', type: 'city' });

        grafo.addNode({ id: 'p1', label: 'Roberto (23)', type: 'person' });
        grafo.addNode({ id: 'p2', label: 'Alex (20)', type: 'person' });
        grafo.addNode({ id: 'p3', label: 'Andres (20)', type: 'person' });
        grafo.addNode({ id: 'p4', label: 'Camilo (20)', type: 'person' });
        grafo.addNode({ id: 'p5', label: 'Fran (19)', type: 'person' });
        grafo.addNode({ id: 'p6', label: 'Claudia (20)', type: 'person' });
        grafo.addNode({ id: 'p7', label: 'David (19)', type: 'person' });
        grafo.addNode({ id: 'p8', label: 'Jose (19)', type: 'person' });

        grafo.addEdge({ id: 'p1' }, { id: 'c5' });
        grafo.addEdge({ id: 'p2' }, { id: 'c4' });
        grafo.addEdge({ id: 'p3' }, { id: 'c2' });
        grafo.addEdge({ id: 'p4' }, { id: 'c1' });
        grafo.addEdge({ id: 'p5' }, { id: 'c3' });
        grafo.addEdge({ id: 'p6' }, { id: 'c3' });
        grafo.addEdge({ id: 'p7' }, { id: 'c6' });
        grafo.addEdge({ id: 'p8' }, { id: 'c1' });

        console.log('Personas en Cali:', grafo.getPeopleInCity('c1'));
        console.log('Personas en Soledad:', grafo.getPeopleInCity('c2'));
        console.log('Personas en Dallas:', grafo.getPeopleInCity('c3'));
        console.log('Personas en Jalisco:', grafo.getPeopleInCity('c4'));
        console.log('Personas en Culican:', grafo.getPeopleInCity('c5'));
        console.log('Personas en Valledupar:', grafo.getPeopleInCity('c6'));

        setData(grafo.getGraphData());
    }, []);

    const config = {
        nodeHighlightBehavior: true,
        node: {
            color: 'lightgray',
            size: 500,
            highlightStrokeColor: 'blue',
            labelProperty: 'label', 
            fontColor: 'white'
        },
        link: {
            highlightColor: 'lightblue',
        },
        directed: false,
    };


    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <Graph
                id="graph-id"
                data={data}
                config={config}
            />
        </div>
    );
};

export default App;
