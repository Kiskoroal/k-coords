print("K-COORDS cargado correctamente.")

local pedMapear = PlayerPedId()
local coordenadas = GetEntityCoords(pedMapear)
local openUi = false

CreateThread(function ()            --Con este loop controlamos coordenadas
    while true do
        if openUi then              --Solo se enviara información en caso de estar abierto
            local ped = PlayerPedId()
            local coordenadas = GetEntityCoords(ped)
            local heading = GetEntityHeading(ped)
            
            SendNUIMessage({
                type = 'verCoordenadas',
                x = coordenadas.x,
                y = coordenadas.y,
                z = coordenadas.z,
                heading = heading,
            })

            Wait(200)
        else
            Wait(500)
        end
    end
end)

--/coords  alterna menu entre visible y no visible

RegisterCommand("coords", function (s)
    openUi = not openUi

    SendNUIMessage({
        type = "abrirPanel",
        abierto = openUi,
    })
end, false)
