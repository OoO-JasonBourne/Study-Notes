s = "global"
def outer():
    # s = "outer"
    def inner():
        # s = "inner"
        print(s)
    inner()
outer()
