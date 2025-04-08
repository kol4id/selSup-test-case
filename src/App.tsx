import './App.css'
import ParamEditor, { Model, Param } from './app/ParamEditor';

function App() {
  const params: Param[] = [
    { id: 1, name: "Назначение", type: "string" },
    { id: 2, name: "Длина", type: "string" },
    { id: 4, name: "Ширина", type: "string" },
  ];

  const model: Model = {
    paramValues: [
      { paramId: 1, value: "повседневное" },
      { paramId: 2, value: "макси" },
      { paramId: 4, value: "макс" },
    ],
    colors: [],
  };

  return (
    <>
      <h1>Редактирование модели товара</h1>
      <ParamEditor params={params} model={model} />
    </>
  )
}

export default App
