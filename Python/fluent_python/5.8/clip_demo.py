from inspect import signature

def clip(text:str, max_len:'int > 0'=80) -> str:
    '''
    在max_len前面或者后面的第一个空格处截取文本
    '''
    end = None
    if len(text) > max_len:
        space_before = text.rfind(' ', 0, max_len)
        if space_before >= 0:
            end = space_before
        else:
            space_after = text.rfind(' ', max_len)
            if space_after >= 0:
                end = space_after
    if end is None:
        end = len(text)
    return text[:end].rstrip()

if __name__ == "__main__":
    print(clip.__defaults__)
    print(clip.__code__)
    print(clip.__code__.co_varnames)
    print(clip.__code__.co_argcount)

    # inspect
    print('======================')
    sign = signature(clip)
    print(sign)
    print(str(sign))
    for name, param in sign.parameters.items():
        print(param.kind, ':', name, '=', param.default)

    # annotation
    print(clip.__annotations__)