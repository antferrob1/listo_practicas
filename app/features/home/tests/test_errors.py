def test_405_uses_the_listo_error_page(client):
    response = client.get("/auth/logout")  # solo admite POST
    html = response.get_data(as_text=True)

    assert response.status_code == 405
    assert "Esa dirección no admite este método." in html
    assert "Volver al inicio" in html
