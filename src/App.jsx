import React, { useEffect, useState } from 'react';
import Tree from 'react-d3-tree';
import ArbolBinario from './BinaryTree';

const App = () => {
  const [treeData, setTreeData] = useState([]);
  const [arbol, setArbol] = useState(null);

  useEffect(() => {
    const nuevoArbol = new ArbolBinario();
    const valores = [10, 5, 15, 3, 7];
    valores.forEach(v => nuevoArbol.insertar(v));

    console.log("Inorden:", nuevoArbol.inorden().join(', '));
    console.log("Preorden:", nuevoArbol.preorden().join(', '));
    console.log("Postorden:", nuevoArbol.postorden().join(', '));

    console.log("¿El Árbol Contiene 7?:", nuevoArbol.contiene(7));  
    console.log("¿El Árbol Contiene 12?:", nuevoArbol.contiene(12)); 

    setTreeData(nuevoArbol.getTreeData());
    setArbol(nuevoArbol);
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      {treeData.length > 0 && (
        <Tree data={treeData} orientation="vertical" />
      )}
    </div>
  );
};

export default App;
