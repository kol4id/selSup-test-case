import { Component } from 'react';

export interface Param {
    id: number;
    name: string;
    type: 'string'; 
}

interface ParamValue {
    paramId: number;
    value: string;
}

export interface Model {
    paramValues: ParamValue[];
    colors: string[]; 
}

interface State {
    paramValues: ParamValue[];
}

interface Props {
    params: Param[];
    model: Model;
}

class ParamEditor extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
    
        this.state = {
            paramValues: props.model.paramValues,
        };
    }

    handleChange = (paramId: number, value: string) => {
        this.setState((prevState) => {
            const updatedValues = prevState.paramValues.map(param => {
                if (param.paramId == paramId){
                    return{...param, value}
                }
                return param;
            });

            return {paramValues: updatedValues}
        });
    };

  
    getModel = (): Model => {
        return {
            paramValues: this.state.paramValues,
            colors: [], 
        };
    };

    render() {

        return (
            <div>
                <h3>Редактирование параметров</h3>
                <ParamsList params={this.props.params} paramValues={this.state.paramValues} handleChange={this.handleChange} />
                <button onClick={() => console.log(this.getModel())}>Получить модель</button>
            </div>
        );
    }
}


interface ListProps{
    params: Param[]
    paramValues: ParamValue[];
    handleChange: (paramId: number, value: string) => void
}

class ParamsList extends Component<ListProps> {
    constructor(props: ListProps){
        super(props)
    }

    render(){
        const { params, paramValues, handleChange } = this.props;
        
        return(
            <>
                <section className='param_editor'>  
                    {params.map((param) => {
                        if (param.type !== 'string') return

                        const paramValue = paramValues.find((pv) => pv.paramId === param.id);
                        return (
                            <div key={param.id}>
                                <label>{param.name}</label>
                                <input
                                    type="text"
                                    value={paramValue ? paramValue.value : ''}
                                    onChange={(e) => handleChange(param.id, e.target.value)}
                                />
                            </div>
                        );
                    })}
                </section>
            </>
        )
        
    }
}

export default ParamEditor