let size = 0;
let history = [];

function calc(e)
{
    size++;
    if( size > 3 )
    {
        history[0] = history[1];
        history[1] = history[2];
        history[2] = e;
        size = 3;
    }
    else
    {
        history[size-1] = e;
    }
    return eval(e);
}

function pre(e)
{
    if( history[0] == e )
        return e;
    for( let j = 1; j < size; j++ )
    {
        if( history[j] == e)
            return history[j-1];
    }
    if( size > 0 )
        return history[size-1];
    else
        return e;
}

function post(e)
{
    if( history[size-1] == e)
        return e;
    for( let j = 0; j < size-1; j++ )
    {
        if( history[j] == e )
            return history[j+1];
    }
    return e;
}