require 'test_helper'

class FiremenControllerTest < ActionDispatch::IntegrationTest
  setup do
    @fireman = firemen(:one)
  end

  test "should get index" do
    get firemen_url
    assert_response :success
  end

  test "should get new" do
    get new_fireman_url
    assert_response :success
  end

  test "should create fireman" do
    assert_difference('Fireman.count') do
      post firemen_url, params: { fireman: {  } }
    end

    assert_redirected_to fireman_url(Fireman.last)
  end

  test "should show fireman" do
    get fireman_url(@fireman)
    assert_response :success
  end

  test "should get edit" do
    get edit_fireman_url(@fireman)
    assert_response :success
  end

  test "should update fireman" do
    patch fireman_url(@fireman), params: { fireman: {  } }
    assert_redirected_to fireman_url(@fireman)
  end

  test "should destroy fireman" do
    assert_difference('Fireman.count', -1) do
      delete fireman_url(@fireman)
    end

    assert_redirected_to firemen_url
  end
end
