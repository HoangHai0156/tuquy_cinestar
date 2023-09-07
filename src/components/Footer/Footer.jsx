import React from 'react';
function Footer() {
  const footerStyle = {
    backgroundImage: `url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAH7A+gDASIAAhEBAxEB/8QAGgABAQEBAQEBAAAAAAAAAAAAAAECAwQFBv/EACYQAQEBAQACAwEAAgMBAQEBAAABEQIDEiExUUEEEyIyYRSBQnH/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAAaEQEBAQEBAQEAAAAAAAAAAAAAEQESITEC/9oADAMBAAIRAxEAPwD8qKjq6IKiKguGCoLiAgAqooAAAAAAKKiqAAoAAqKAAoACqAAqKqgAAAAAoqKoAAACgAAAgAKAAAAAAACAAAAAAAAAAAAAAAAAAIAAAAAAAiAAAAAAIAgAAACCAAUKAAAAIAIoioIAAAAAAACCKgAAACAAD0f6p/6Xxxu9Rm9DDPrIzeZ+N2xKKxUrVZoIgCoKgAAAAAAAAoqKoACgACooACgAKoACoqqAAAAACioqgAAAKAAACAAoAAAAAAAIAAAAAAAAAAAAAAAAAAgAAAAAACIAAAAAAgCAAAAIgABQoAAAAgAiiKggAAAAAAAIIqAAACiCCio7JVS1XNKmlRFNLREURQVCiisioAAAAAAKKiqAAoAAqKAAoACqAAqKqgAAAAAoqKoAAACgAAAgAKAAAAAAACAAAAAAAAAAAAAAAAAAIAAAAAAAiAAAAAAIAgAAACIAAUKAAAAIAIoioIAAAAAAACCKAAAAAACPRYxW7WKrmzUUBBRFRGkRUFBUxFqCoKAgAAACgqgAoAAqKAAoACqAAqKqgAAAAAoqKoAAACgAAAgAKAAAAAAACAAAAAAAAAAAAAAAAAAIAAAAAAAiAAAAAAIAgAAACIAAUKAAAAIAIoioIAAAoIKgAqCAAAAAoIgoo69X5ZS0VxABVRRGkFEVkxuQxFcxvGbBWRQEAAAFAFAFBBQVFAABQFQVQAFRVUAAAAAFFRVAAAAUAAAEABQAAAAAAAQAAAAAAAAAAAAAAAAABAAAAAAAEQAAAAABAEAAAAQRUAKqAACAAACAAAAAAqCKAgoggoAAqAoCCioGpRHFoRVVQBVi4kqz7RpcMawxlpixl0sZsFYsZbrKiCoCKAIKCoKAACgAACiooKAAKiqoAAAAAKKiqAAAAoAAAIACgAAAAAAAgAAAAAAAAAAAAAAAAACAAAAAAAIgAAAAACCiCAAACAAAACKCICggoCCgIKAguLgjI1hgMigIoCAooGKYIC4LEc79qxq6y5NjOmqrSs6aDTUZjfI1jcnwuLPoZbZsZ6jozYDkmN+pgOeI6WM2Cso1YgIKCoKKIKCoKAgoAAKAAKiqoAAAAAKKiqAAAAoAAAIACgAAAAAAAgAAAAAAAAAAAAAAAAACAAAAAAAIgAAAAAAAAAIAAgoCCggiiCCgIKAigAAIKACmLijNiY2WCMDWGKiC4uLETDFxcWImDWCxK8pqUcXNrV1lVVVjKxVbjcc5WpRXWVrXPmtyDSe0PaU65xkhWrWQSLRK1mpeRWLBr1TAZFwwVEaxBUFARTCCgoCIoKAAAKoAAAAAKKiqAAAAoAAAIACgAAAAAAAgAAAAAAAAAAAAAAAAACAoIKAIoCCgiCiCCgIKAAoiAoIKAguGCILhgILhgiYLhgJhimAJjWGAmC4YqIYuGEEahhixKqyIspCpeEsyurFnyYms4uLhjUZqGNYYsSpgo1Erw/1UHlZVUFVoZaUajUYWVVdeXXiuHNdOaLjtkv2zfHM+F5rSNPPZlMduuPas+mRRiNRZPlcFxmxm846s2bEVyL9NWJVGcMXGvUVjEx19TEVzwx0xMFYwaxMBkUVUAAAFEUBBQEUFVFAAAAAUAAAEABQAAAAAAAQAAAAAAAAAAAAAAAAAAAAAEAAAUEFARQAFMERVwwEwxcMETBrDCDJjWNc8b81Rzwx09Pn/AMa9Z+Ijji463ifxmc1RjDGrzhgjOGNYYRGcMawxYJhi4uESs4Y1i4sKzhi4uESpiyLgsSrhedXn6a55vVyEK5YY9fP+Nz//AFdL/ic3/r1YtxJryYPX/wDHM/7fLnf8byS3JsjWRNrgNet/KNRl80QeEaEVRRFVWpVZWVR05dZ9OPNduaq468NyOfNdJUbaxOuNalUHC8VfXJ8utY6mqOVS3G8xi6pUtZaQhSfbX2y3DWs0S1plGqIuIhQwUVmxnHTEsVXPDGsAZwaQVBUBBUAAVQAAAAAAAUAEABQAAAAAAAQAAAAAAAAAAAAAABQQVABQRFAAUBFFxRDFxREwxcMBFxcMETFxcX1oM4Y3zztdZ45+A4YY9F4lTnx5dEcZxfx09XQsBiRK3jNhBlqSWIsWJWe+cxjHW83r6S+PrmbYuJrnhjeJixms4Y1hiwqYmNYYRKmC4qxKmEnyuGLCrjU8e/Ua8fF66kkevnxTmM74Z683Pht+3o48c5nxHSTF2T7RpjrOYxtTydy1j/ZJFzE3XeX4a15P/oT/AOixYlej/XPe9T+jhz/kfIs1PHwxFeJlRFUURVFWMrFG5XTmuUb5qq9HNdJXDmukqtO3LTPN+Fv0jSWpbGbVk37VKx1azrreNP8AT+fLR64rObfp2ng/as8XrfilI4+l/q47XnWbziVpzxMbxMFZxK3jNiKysAKsXCKNMWM2OmM9QVgXDAQxQVnBpARGkVUFAQABFAQAAAAAUAAAAAAAAAEAAAAAAAAAUEFAAABRURRQQXFwEwVcEQxcXFEwxrDBEwxrFwiM4uLiyLBvnj1m/wBWSX7VrmIrM4zqY6ZjfM+Gbzer8IMf34a9W5xhio5eqX4dvVz75+TEYSxrF9daiVyxZG7wSCNcc1rr6q83I1moPJiWO3k4vN3+Vzx0zGNZwXBYlTBRYlQFkvVkn3SJUb8Xi68neSNXxXmzfuvd/j8Zz8zE3Y1mVfH4ufHMka9VvUn259+eRzlbY8nk9LmPP15Nq+XyTq64ddyN5jG611053pm9JrUZq6mpoqLogI+aA+e2qhigLhioNRMWAsjcZixpXTmunPy4x056wXHeXGvZxnTXsLW/6RjWoo3K6Rz5jpBpTDVQZqWNVJFVz65Zx2sc7PlRjGenTGOgYFMUpGoysqRrNaTr6NSjVZFwwGcMawwVnDGsMRWMGrEVWUaQEFQEFQAAAAAABFAQUBBQEFQAAAAAFBBQAAAUBBRUBcMAMXAExcXDFRMXFxcBMXFxcWIzi4uLhEqYY3hixKzi41IuLErGLjWLhEqc7rrIxz8XXX5/sw3FzTn7dZzjEd5ZjO4tcb0c3Tuf8l5ln8WJSxz6jr18TXHrrb8GYm6mNSJqytRKXlPVv+JpBlqVms6sSt+TjruTJrjZZcsyvT4upZn9c/8AJ/7S/q4zrhRWW4xQBYlXnm9f9Zqz246nxlevwzmcT1dOfFzevbNrFajXj5mS9T5dL1In08/l7Y+t2M+fyf8AL4eXru1ruuPVbzGd066Y1LWdVitWprOmg1prGpojpoxoDxf1Uo+c6NGs6qjWrrCqNxWJWoDWkqJqjrKuuUrUqjpK3K5StTpVdY3HLnpudKrrK3K4+yzsV21ZXH3a56B2k0srPPTp7IrmzZrtZKzeVHGxix3vLN4UccPV19F9Fo5ep6u3qnqVpy9amO/qnoK44Y6+h6IuOWLjfqYNMYmN4lgrnYmNpgMYjeJgrOJjWAMo1YiiAAgoCCiCCmAguCiAAAICKAAoIKKIooIKYImLi4AmKuGKIuLi4ImGNYYsExcXFwiVMMaxcWJWcXGsMWJUxcXFxYlTDGpFxYzWZFxca559rJCJXTweH2/5dT4d54PHvzzF55/1+ORnax9abng8dssmY1Zz9WRy9rGLbpCteTxzn55nwz1/xhOvn5dvSd8qlcOZeutv01s6+mvJJxzkc/HM+1Sp5bkxxyuvkrnauYm6yalrF6ajNdfdn3c70nsQrr76mufseyxK7+K506eeS868/HWV0679skwhfGJzaf67fq/Lp14u5N+056z5aZcuubzcsZd/W+W7/Ho8X+Pxz82bSwif43HXpvcyfx6ZkS2SOfvK5b66Z46ddZHj8/Uei5Z8vJ57KYa4ddufXSdX5Ytac6Ws6WpJohpp60ssBNNQQXRnQo89+xb91HgdAVFFEUFXWRRvTWQRpZWVijcaYjWqrWrOmPY1R09q1OnKVqUHT2b56xxlalVXo57dJ08s7b58gteqdNbrhO2p5INV1Rj3alBcMF0ETGjBpFwxRUxmxu1i1VTEw1RazYzY6JYK5WJjfTNUrNjLViYFZxG8QVlMaxMFZwxrDAZFMBEaTAEUBBcMBMFwBBQEMakXAYxcaxcBjFxcwEZxcXFwEwxcXFRnFxcXATDGsXFRnFxrFwKzi41hiozi41i4sZrOLjWLixKzi41hixKmGNYLGaki4pipUdv8fjrrrefiT7T/AOfy+u+lw8fk68VzP/w0r19c/DjY787eZepla9Z+Ofxt5bGbHp65mufUmNMuXHPt3Jfp65mfH08vOzv4j1Sf8U0x5vP3Lcn8cb3kXy/Hd+XPyT6jWYzus3q2/Kal6kjla0zWuumLUtS0SramoijWmsgjcrt4e5s37ed08X/YV7e/JZy8vv8ADXk6ziuGmG69ng7k5dv9sj50234dfb4TcXNenvzbMc55Pn4cb0zO7zUi16uvLcx5fL3lTryuHfdqJunXTFqWs6VldXcY1vn7+Uo1LS7+LK1qq5ZCSN9Wf1y3EDrJ9DNujNHG/YX7HjbAFAAQABVQUVqMrKo0AKi6gqNausAOnsvs56ao6+yztylXVHeeRqduErUotd+enbnt5ZXTmjWa9E7X2cpVlFrrOmp05Sl7yKtdb3J/Wb24XrT2aidOvtqa57qrDpvV1z1dItavSbQhGqWJjSC1nExowWsWJjeJiKziY3iYLWMMawwVnEdJzq+sRXIx09Yl5/AYGsTARMawxRnFxcWQGcX1bwxBnDG8MBjDG8JPkRjDHS8/Hwl5xUYxcXFxUZxcawwExcXG+eNVGJFx19cTNBzxZG/UxWazi41hixKmNTj9Xnna788SiOE436a68efXy9M4knxGbMKa82f+GOvd+GG8Y3WRXbxf4vk8k2SSftX4n1nx+K+X/pPr717vF4PH4edsl6/WvF4Z4vHk+b/a5+S3HPdrWZG53bfssnf3JXh77637Z58vXN2VeTp9L0/GbMeSf5nWf+uvh8nXcttSaXGu3DydfD0dTXPrxb/TDWf8fn4vdb8neRO+v9fjz8eTvy6v1LGfL18uXXdv3Tq6xW2N1LWLWs3XO/FwZVE0+wE0rILq6xq6Detc93n6ctJSjterf6lnwvN5mMd3/lYtHTx719fTpecjl4+smO2/Cbq4534c718t+W5HmtZq66dVxtOu7WNZ3UXUE1KKsrOmpR09sOvJf45aaUXTWRKNDOhRi/aLftHlbUBQAAAEFRVBUAalVk0FEVQFk1AFRVBpIuqLGozK1qjcrfPTlrUor0Sta489NXq58Ctdd59M3pi9JreM7rerKxqtDcrWucrUoVpWdVWq0rKi1QEaoNetk2xBqs4Y0mC1nDGsMRaxhjWGC0n0mOkiWI0wLYQGbztX1jfrc+EBi8fjOOsS87QYk1uc41OWsBzwx19TEHOcr6umYgOdiY63lnFROWrxKkjcglYvMjOOl52/LONYm6zi41hixmpI3z8Ji4sK3mr6sxuVIVmwxpcaZ3WMMdePF13fiO8/xec+dLmI8/i53p6ZMOP8f062XXS8s6uOeM9eO/cdsKYa8nk4snzHLLbkm17O+fbmyT5PD/j+nz1flvN8c9z1j/G/x9u9z4j26zzkY7805+GN261njrrl5bz/AFj/AH5zbvy8vk8tttXMN1PPJzfj6rha7c+SdS89TWPFOf8Ab/y+o2561x/jeTqS/T1ePieHj/2p/u5/jN8vt8M7utZkdPYvckce+/Xly/26Ra3/AJHk/wCH28k3q5HTr/lflrjmcfMX4zvqf6ZJ/wAr8uHXN34d+uk34KRxnOc/Lz9fF+Xq8k+Ph5PJurWdTSVjTSo6W/DFpqVBNNQKLqs6slv0DcvydXaTlqc/qjrxjprjG/b4TW8Y8rz9O3fTj1WU1istVGURFRAQEUEEoAJQAKM37Qo4NCoAoCgAIAAKiqApQAi5AXUqUAVBRdNQUa1dY1dUb9mp3HPQHonzPirOrxXHm1bdqld/9s6mWRjfliba118VrDWpVlYlWVpluVqViVZVVuVqVzlalVW5VZlagqx24nP3/XBrnqymtZr0Xn2n25dc+tx05ut5L9st/Xny/hlde7NXw8bdWjnPH1f5jN5s/j2ep6z8ZrceLL+NccXq/wDj09cSs3mcT4KMek5jn06W6zYLXKpJ8t2LOFFmYzY3hiKx63F45t+3SRucg5zlfV0xKDFZbqESpWW8SxYlWfTF+13EWJTFFxYlS7TFxcWM1MMVViVnFxVkWJUxXXx+Dq/Nj0c+DmffylzD14no8HE63f47Xw8fjXPM5+pibq5jfHEn8X4ZveRx68l1mLXpmFkeSeaz+nXlvX9WJXa98ud6+XOTq/Trx45Pnr5q/GaTpr/Z8M+XPtxvWwK115bP64d9237O+sceutazGd1q+SxzvaWudqs1147zp6euJ5ON5+K8E6er/H8v8tTVxrnnrn/t9unPwz11rPsjSeXquM6+W+vleOc+SoSVq/C2uffSVWeqxe/U66cPJ0qa6XybHDyd/wAjF6ZtGauk+Wdal+Co18FZ00olQtRKK1zcZiiusuta5ctatXG9NY1NSqvVcq1azU1ERUZEqKiCAEEMVcSDI1iVIIFEGKLftHFoAAVAFAUAAFRQNXWVAXWVVFQAAAAFFEUBqfNZJVHWfBuMyoo3OvlvqSSY5T6XVxG5VlY1dbR0lWVzlalUblalYlWVR0ldOZrjHo8U+DdaxnMuOnPi6+NmR05yfLp7fDPTeYkk5+IrG/LpzNRtieLrvrb8R6OeJxMhb6xyvl/afV+Ouxm1xvkJ5P1Ytdtc/J81PfC3SFZRbU+1Ss40ClBYuItXh0xyjU7pFrdZqexpEqWM1pLGom6yo1J8EZrCY1Z8mLEqRRWolRUb459qJWXfxeG/djr4/Fzz9za7TGd/TWY5TwTPqHH+POb9a7bF9ozdWJJjPXfzjdrnZLUF/hampqox3XDvvHbyc2z4eXyc9St4xul7XntxtJ0rNe3jyt3yZHgndlbvl2JFrv15Nc71JPtyvkxz8vcs+1hXXr5+XNPF3vN35LRCzY4d/Fd53JPly76lpU1z1vjuys/DPt8/Aj1zyWr7MePn/jLftrrMRs9mvdw1dQdL2xenO9Yx10FXydOHXS99OVpWdXUTRKirrOpqVWtNZ00oujKxKNxrGNW9NDWyLrlpqVa6e0S9MaaJVvSamoDWmsgLqIIKgALEEVpKmmoAgDN+6i37qPO0qKgAAKgoIoAAKCooCKACoAgKiiAKAAqNSfqiKvq1JIEZlVbN+mWsRpdZVqo1qys6s+fpRuOvHN35jPHMnzft0lK1mN88TXTXOdLekrTtOi9OHs1OlWt3p38Xc9fn7eS35a56wM16fL5cmR5r38r13HHWsTddfY9nPV1Sus6a9/jHGVrVWta3y5as6wK6muc6X2ItdNL18MaW7FhQlsQ1qMVuVqOcrUqRenSTS5Inys5n9RaxJa6cz9ayMXuS/Co1eJWOsnxDrv8AGLVzE3VE118PMt2r8Z+sO3iuT4jr68/kX6+mN1vMWdWRL3RKytS939Xnuy/LlafOfCxK7deTYx/txjLny59aQrv/ALN/q+7zTqtexErr15cc+vNK5d9OHXfyuYm669+SVw66+fhL1rOtMbrfss6ctXQb66c+qaz1dKHPd5vw1fJdc8TQdZb0dc2TWeOm/eIrjeqvi6nt8zWfJ1N+GOesqVHvnRbrzcd2tXtG67XIxescventoNddOdq2sdURjusWr1WWd1BWRKLpqBRdTQSqLEAbiVJVaRAABBRRBAAAARQAAQAAQAAZv3UW/dR52lRQAAAAAAAAAAAUUQW4gAAgLhICDVkZUWfbWsgOkprCyitwqRdUZVKNMq6c3HNrVHWdLrnK3zRp05ta1iU0G9WVz9sX2UdNWVx9lnSla6qSiT4aRvLPtZWb3sxJ0o6c/bpJLflxnTc6DG++fX//ABjV67/4ufsuGt6ezn7GqV25u3GrLPtx56yyvVzJ5OSn1y1dO+bxcsZ1tlrWpXPTQrvO1nbhp7JF6ei9/GRmOPvV96QrtcrPq5e1a/2KlbnLtxJzHm99d/H4++v5kTVx1nbWnPinPzbrHXUn0w237Y59d7WL2kurjNbalyMansiul6+HPpL0zehA1nTVoz3tcepXXrtmdbVrMcamvT6z+sd8c36+CkcUdPST+pZ8FI5exazb8p9ohqavWSMaDc6wl1z1rn7QXo55l/q5p9CtTnP6az7mopaz7YtYoi/7EvesUZoWoCKCCACAoigKgCqg1gAKgAgAAACgAACAgAAAAAzftFv3UeZpQFAAAAAAAAFAAAARUUF+kUF01AF+1yJGgYs+fhcaQIiwFFVFBKi1GkVWVVG5WpXONaK6SrrlOmvYVvTWPY1Ua9lnTnqytI7SpakpVoausaatR009qx7GqN7prGm6o3K6fGOMvy6QFkdee7xmOcpaK9X+334uxxssY46yt99zMXE31NNY01tlvTWNNBvTWNNEb01nmXq5Ho4555uyfKbsazK6f4/h+u+//wAj2SyR4r5rGO/Nf1z266ZMejz+bL6yuH+xw68ms+64zuvZzJ1Na9XDw9zHW+WRKqdXHK+XE783tXDydTftU3Xo/wBspe3knTc7Cu96YvkY1z7oV067n6ePyfLz6vPWCV670xescp2Xr4+0V09ktcff5TryWhTvqax7p9oVlbdTUEoutS4wulVv2S1jVhRV9hlBvWaamipYla1miIjcmpYishgyIKAgAKAChGmsGQFAAAAAAABAQAAAAJNqAOkkgqxxv3UW/aPMqgKAAAAAAAAAAAAAAEVFUAAFlQBdNQBTUBGorMa1VUNS0EVBplTQAWVAF1dZNUa01BRv2T2rItGtXWFWo3q6xpqjWms6atG5XXm64Stc9WUo9XPMz5p1I5zyF7+PsU01jV10Ya01nTVo1prOk2/RUa1eZevpi7PuOniuSpurjr4eOpdtd/hx56X3c92umYeWuPVa761zvyqalrPsX4Y1ay68+TF68mxw01FdPdLdY1m0Rq09mNNKOs8nwz11rnpqUXVlY00o6zrSf+uWm1Krd+GdN37LYAlNS0oaaggogCtSsasBtKCqiKiIKgK0VnTUBDQEMUQTDFAQUWBF1BQAAAAAABfWAgtjIAAACA1x+s/bX1BVtE/glHO/aLftHBVQVQEUAAAAAQAABRAFAAVFUAABARUFAABRFBZVQVSirFSMjVypZ+KEXEigliNVMEAFFakYJQdPU9WZ03FozhjeGRaRgasifC1Ea5TFkKNaaVnWs1GjWdNaqNaazpq0bejj/jzjzc3Oo63qfxndax22X7TOZ9OHtZ/Wp3bGV8bvWM3tmudoOnsuuWroNX5Zw1L0IljOtWsVQtTREDTUEoCBRRAoGoJVUQKKIJRUBQVAFIiwo3GsjEq2/Ci2JYkqglRSoMgAIqIAAAgCiKUUSfK2Y0AAAABJ8tzIoREuJ1f4ylVq1GVQAFQABYaknytiKWjIlEv2gOKgACoKKIAogAACoAAACoAoAACgAIKgChABYgDQiCt/CVF1Q1dT7FRTQwDQs/EBTEagJYkaVRJGpSGg1prOrqhazq1mqjfNajlL8ukpRv1mfLn1MrWtSyrSOeX8b54tm34a01eiM+nz/wCJebL8NmnRGPXr8WSy/TWmlIWMz4a1jqlG91msau6BpqWYio1ek1BUaSppqKzUWyogguIgICKAgKIAqAgAAogCiKoAAsNQBV1kBrS1kKAAACCACgAACDXNxrXM1qjfrv0WYk6sN1agT7Mqz6Bae3wlZqKW6gIKVFAAVFQBSfa1BBKNAOYDioAAAAAoAAAAAAAAAoAAACgqLAAAABBQFAAMhf8AxFVCVWVBdNQBrWVRRYrKg0JpoKaJii6usgLqURUVrWNNB0nSzpzi6DrqWsStKq+1J0xfg0R11NYlNFb9meqlrNoi6ssYNVHT2SyMKAA0irEktazEqxUz5BFSxmxus0HOjVjOIIKiAAKAAAIACgAAAIAAogKqAAAAAgAAIACoAoigEoqjc61XOLpRazTUAAQAFFAAMFARQEFEHMByUAAAAAAAAAAAUAAAAUEBRFAABQFEUAFQBUEEUBRSgCKKAAAioAaIourrIC6AABigKCEUjQEVBVKmlTQa1NZ1RC01KKAhoNCLAWR0yJAo1sjGgKAAIKDNRqoImHqqgz6mNMgliY0IMYY2YDA1i5AYG7GQQUBBQEARQABFAQBAAAFQAABUVQVAGkTQAAAFAAUAAAEEVAFABgByUAAAAAAAAAUAAAAAUEAAAAUAURVANQFKgAAIKigoAoAqGpoAaaAAABoKLpqALpqALogDUrWsYA1qagoaBgguphigphgCNGAyLhgNSr7MijWiAqlqAGmoCFpEagLIKiKiKKiI0mAgYYgaamGAuoYAAACAKIIqoAAAAABixQQAEABBUAAQBRQBQRUUEVBQAAAABUAAGAHJQAAAAAABQABRFAAAAAAARQAAAAABQAAAEFQBVRQABQBUEUAAAABDFFDEUADFBBcLAQFxRFMAUE0FTQUUQEaTFhQRZCRVExFqIACgqKgKzTRWtZ9ktQG5dGZWtBQSgVC1kRdEAaZq6gAAoAiCkhVVAEEUBAgooACVFQAEQAAFRYAAoAIC6goqEAAAAAFQBaIIMgOagAAAAAAAACgACiAKIoAAAAAAAAACgAIAAKAAICqyA0IAoiqoICKAAAAAoaagDWqyaDQmmgaIaooALhgAYqLoCs6aCiAAChgoCI0yAAIgqALqALpqAoAIACgqIIAAqKDWpagAIoIqKAoAgVAC0RAAAAAAAABQAAAFQAAUBUAUEEoAMgOagAAAAAAAAAACgAAqAKIAqAAqAKIoAAACoAoICgAAAAigAAoKgCiKAIAAAAKAAKAAACiaoKIoJUaRQENBoZ0BViANDOroGs1pKogCICAqoAKIoAAAgCiKACAAIKIAAAKAEBAAAEAABAAAAAVFUAAAAAAAAAAAAAEGQGFAAAAAAAAAAAAAFAAAAAAAAAAFEUABQVFAwAAAQFQVQQAAQAUFQBUAAAABQEUBUNBRAFEAXTUAXTRAXUFUABAAUABdEAKFqAuGEUGRQAAEFQAxQEFEEAAEAUQBQAAAAAEAABAAAAAAAUFAAAFBBUAAQAAAQFEAQasmmRlqMjWQyBGRrIZAjI1kMgRkayGQOWRvIZCEYG8hkIRgbyHrCEYG/WHrA5YG/WHrCHLA36z8X1n4sOXMb9Z+L6z8IcuY6es/D1n4Q5c1b9Z+HrPwhywN+s/D1n4RedYVv1n4esIc6wN+s/D1n4sOdYG/Wfi+s/CHOuY36z8X1n4Q51zHT1n4es/CHOuY6es/D05/Fic65o6+nP4enP4Q51yV09Z+HrPwhxrmOnrPw9Z+EONcx09Z+HrPwi8a5jp6z8PWfhDjXIdfWfh6z8Ica5Dr6z8PWfiw41zHT1n4es/CHGuY6es/D1n4RONcx09Z+HrPwhxrA36z8PWfgcawN+s/F9Z+EONcx09Z+HrA41zG/Wfh6wOdYHT1n4es/CHGuY6es/D1n4Q41zMdPWHrPwONc8HT1n4nrCHGsDfrD1n4HOsDfrPw9Z+BxrCOvrPxPWfgca5jp6w9YHOsDfrPw9Z+BzrCOnrD1n4hzrmOnrPw9YHOuY6es/E9Z+BzrGDfrPw9Z+BzrA36z8PWfgc6wN+s/D1n4HOsI6es/E9YHOsDfrF9Z+BzrmuN5DIHOuY3kXIHOsDeRPWBywN+sPWfgcsjWQyByyNZD1iHLI1kMgcsjWQyBzrI1JDIHOso3kMgcsDeQWay/9k=')`
    , backgroundRepeat: 'no-repeat', backgroundSize: 'cover', zIndex: '0'
  };
  const linebg1 = {
    backgroundImage: 'url(data:image/jpeg;base64,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)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    top: '0',
    left: '0',
    width: '100%',
    height: '2px',
    // zIndex: '-1'
  }

  return (
    <div>
      <div style={linebg1}></div>
      <div className="bottom" style={footerStyle}>
        <div className="bottom-nav">
          <div className="logo-footer" style={{ backgroundImage: 'url(https://cinestar.com.vn/pictures/cache/moi/9Logo/trang-100x100.png)' }} />
          <div className="bottom-wrap">
            <div className="social">
              <h2>Liên kết</h2>
              <ul>
                <li><a href="https://www.facebook.com/CinestarVietNam" target="_blank" className="facebook">Facebook</a></li>
                <li><a href="https://www.youtube.com/channel/UCMZgMHS9vFfXoe3UA6eanyQ" target="_blank" className="youtube">Youtube</a></li>
              </ul>
              <h2>Hotline</h2>
              <a className="hotline-tel" href="tel:0234 629 1888">0234 629 1888</a>
            </div>
            <div className="cinestart-price">
              <h2>Hệ thống rạp</h2>
              <ul>
                <li data-name="8f3a5832-8340-4a43-89bc-6653817162f1">
                  <a href="https://cinestar.com.vn/rapvagia/8f3a5832-8340-4a43-89bc-6653817162f1">
                    CineStar Quốc Thanh
                  </a>
                </li>
                <li className="current" data-name="e08f986a-1937-419e-b1b1-759b7c74728b">
                  <a href="https://cinestar.tk/rapvagia/e08f986a-1937-419e-b1b1-759b7c74728b">
                    CineStar Đà Lạt
                  </a>
                </li>
                <li data-name="667c7727-857e-4aac-8aeb-771a8f86cd14">
                  <a href="https://cinestar.tk/rapvagia/667c7727-857e-4aac-8aeb-771a8f86cd14">
                    CineStar Hai Bà Trưng
                  </a>
                </li>
                <li className="current" data-name="cf13e1ce-2c1f-4c73-8ce5-7ef65472db3c">
                  <a href="https://cinestar.tk/rapvagia/cf13e1ce-2c1f-4c73-8ce5-7ef65472db3c">
                    CineStar Bình Dương
                  </a>
                </li>
                <li className="current" data-name="f8a60463-5c34-49a9-9ae8-52081e387bb8">
                  <a href="https://cinestar.tk/rapvagia/f8a60463-5c34-49a9-9ae8-52081e387bb8">
                    CineStar Huế
                  </a>
                </li>
                <li data-name="8f54df74-3796-42ea-896e-cd638eec1fe3">
                  <a href="https://cinestar.tk/rapvagia/8f54df74-3796-42ea-896e-cd638eec1fe3">
                    Cinestar Mỹ Tho
                  </a>
                </li>
              </ul>
            </div>
            <div className="cinestart">
              <h2>CINESTAR</h2>
              <ul>
                <li data-name="212_2">
                  <a href="/phimdangchieu">Phim đang chiếu</a>
                </li>
                <li data-name="212_1">
                  <a href="/phimsapchieu">Phim sắp chiếu</a>
                </li>
                <li data-name="212_3">
                  <a href="/suatchieudacbiet">Suất chiếu đặc biệt</a>
                </li>
                <li data-name={213}>
                  <a href="/lich-chieu">Lịch chiếu</a>
                </li>
                <li data-name={211}>
                  <a href="/khuyen-mai">Khuyến mãi</a>
                </li>
              </ul>
            </div>
            <div className="info">
              <h2>Thông tin</h2>
              <ul>
                <li data-name={207}><a href="/gioi-thieu">Giới thiệu</a></li>
                <li data-name={209}><a href="/tin-tuc">Tin tức</a></li>
                <li data-name={210}><a href="/hoi-va-dap">Hỏi và đáp</a></li>
                <li data-name={118}><a href="/lien-he">Liên hệ</a></li>
              </ul>
            </div>
            <div className="info terms_and_condition">
              <h2>CHÍNH SÁCH VÀ QUY ĐỊNH</h2>
              <ul>
                <li>
                  <a href="javascript:void(0);" data-name="terms_and_condition_2">Quy định chung</a>
                </li>
                <li>
                  <a href="javascript:void(0);" data-name="terms_and_condition_3">Điều khoản giao dịch</a>
                </li>
                <li>
                  <a href="javascript:void(0);" data-name="terms_and_condition_4">Chính sách bảo mật</a>
                </li>
                <li>
                  <a href="javascript:void(0);" data-name="terms_and_condition_5">Thông tin công ty</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bottom-nav-icon">
          <ul>
            <li>
              <a href="javascript:void(0);" data-name={1}>
                <img src="https://cinestar.com.vn/pictures/moi/8DinhDang/dolby2.png" align="DOBLY ATMOS - CÔNG NGHỆ ÂM THANH MỚI MANG TÍNH ĐỘT PHÁ" />
              </a>
            </li>
            <li>
              <a href="javascript:void(0);" data-name={2}>
                <img src="	https://cinestar.com.vn/pictures/moi/8DinhDang/crhistie.png" align="Máy chiếu CHRISTIE" />
              </a>
            </li>
            <li>
              <a href="javascript:void(0);" data-name={3}>
                <img src="	https://cinestar.com.vn/pictures/moi/8DinhDang/2d.jpg" align="Công nghệ chiếu phim 2D Digital" />
              </a>
            </li>
            <li>
              <a href="javascript:void(0);" data-name={4}>
                <img src="https://cinestar.com.vn/pictures/moi/8DinhDang/3d.png" align="Công nghệ chiếu phim 3D Digital" />
              </a>
            </li>
            <li>
              <a href="javascript:void(0);" data-name={5}>
                <img src="	https://cinestar.com.vn/pictures/webimages/Coffee/cinestar-coffee-02.png" align="Cinestar Coffee" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer">
        <div className="payment">
          <h2>Chấp nhận thanh toán</h2>
          <ul>
            <li><a href="javascript:void(0);"><img src="https://cinestar.com.vn/pictures/cache/webimages/9Rest/1Logo/napas-40.png" alt="Thẻ thanh toán nội địa" /></a></li>
            <li><a href="javascript:void(0);"><img src="https://cinestar.com.vn/pictures/moi/ThanhToan/payment-visa.png" alt="Visa" /></a></li>
            <li><a href="javascript:void(0);"><img src="https://cinestar.com.vn/pictures/moi/ThanhToan/payment-mastercard.png" alt="mastercard" /></a></li>
            <li><a href="javascript:void(0);"><img src="https://cinestar.com.vn/pictures/webimages/momo.jpg" alt="Ví MoMo" /></a></li>
          </ul>
        </div>
        <div className="copyright">
          <p><a href="http://online.gov.vn/HomePage/CustomWebsiteDisplay.aspx?DocId=51406" target="_blank"><img width="150px" src="https://cinestar.com.vn/catalog/view/theme/default/images/dathongbao.png" alt=" đã được duyệt" /></a> </p>
          <p>CÔNG TY CỔ PHẦN GIẢI TRÍ PHÁT HÀNH PHIM – RẠP CHIẾU PHIM NGÔI SAO<br />
            Địa chỉ: 135 Hai Bà Trưng, phường Bến Nghé, Quận 1, TP.HCM<br />
            Giấy CNĐKDN số: 0312742744, đăng ký lần đầu ngày 18/04/2014, đăng ký thay đổi lần thứ 2 ngày 15/09/2014, cấp bởi Sở KH&amp;ĐT TP.HCM<br /><br />
            2015 © <strong>CINESTAR</strong>. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
